import { render, screen } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Review from '../../components/Review';
import { mockInitialState } from '../mocks/state';

describe('Review Componsnt', () => {
  const mockDispatch = jest.fn();
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockImplementation((fn) =>
      fn({ candidate: mockInitialState, page: { isLading: false } })
    );
    useDispatchMock.mockImplementation(mockDispatch);
  });

  test('should render all candidate details on review page', () => {
    render(<Review />);
    expect(screen.getAllByRole('term').length).toBe(9);
    expect(screen.getByText(/First Name/)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/)).toBeInTheDocument();
    expect(screen.getByText(/Email/)).toBeInTheDocument();
    expect(screen.getByText(/Phone Number/)).toBeInTheDocument();
    expect(
      screen.getByText(/Live In US/, { exact: false })
    ).toBeInTheDocument();
    expect(screen.getByText(/Git Profile/)).toBeInTheDocument();
    expect(screen.getByText(/Resume/)).toBeInTheDocument();
    expect(screen.getByText(/Cover Letter/)).toBeInTheDocument();
    expect(screen.getByText(/About/)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Review and Submit/ })
    ).toBeInTheDocument();
  });
});
