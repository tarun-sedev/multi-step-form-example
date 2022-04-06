import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import CandidateDetails from '../../components/CandidateDetails';
import { mockInitialState } from '../mocks/state';

describe('CandidateDetails Componsnt', () => {
  const mockDispatch = jest.fn();
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockImplementation((fn) => fn({ candidate: mockInitialState }));
    useDispatchMock.mockImplementation(mockDispatch);
  });

  test('should render input fields for candidate details', () => {
    render(<CandidateDetails />);
    expect(
      screen.getByRole('textbox', { name: /firstName/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /lastName/ })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /email/ })).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /phoneNumber/, exact: false })
    ).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
  test('should fill the input fields and submit via button', () => {
    render(<CandidateDetails />);
    fireEvent.input(screen.getByRole('textbox', { name: /firstName/ }), {
      target: {
        value: 'first',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /lastName/ }), {
      target: {
        value: 'last',
      },
    });
    fireEvent.input(screen.getByRole('textbox', { name: /email/ }), {
      target: {
        value: 'first@last.com',
      },
    });
    fireEvent.input(
      screen.getByRole('textbox', { name: /phoneNumber/, exact: false }),
      {
        target: {
          value: 'first',
        },
      }
    );
    fireEvent.submit(screen.getByRole('button'));
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
