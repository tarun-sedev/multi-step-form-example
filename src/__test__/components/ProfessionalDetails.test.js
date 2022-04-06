import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import ProfessionalDetails from '../../components/ProfessionalDetails';
import { mockInitialState } from '../mocks/state';

describe('ProfessionalDetails Componsnt', () => {
  const mockDispatch = jest.fn();
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');

  beforeEach(() => {
    useSelectorMock.mockImplementation((fn) => fn({ candidate: mockInitialState }));
    useDispatchMock.mockImplementation(mockDispatch);
  });

  test('should render input fields for professional details', () => {
    render(<ProfessionalDetails />);
    expect(
      screen.getByRole('textbox', { name: /gitProfile/ })
    ).toBeInTheDocument();
    expect(screen.getByTestId('resume')).toBeInTheDocument();
    expect(screen.getByTestId('coverLetter')).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /about/, exact: false })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Back/ })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Save and Continue/ })
    ).toBeInTheDocument();
  });
  test('should fill all the details and submit via button', () => {
    render(<ProfessionalDetails />);
    fireEvent.input(screen.getByRole('textbox', { name: /gitProfile/ }), {
      target: {
        value: 'https://www.test.com',
      },
    });
    fireEvent.input(screen.getByTestId('resume'), {
      target: {
        files: [new File(['test'], 'test.pdf', { type: 'application/pdf' })],
      },
    });
    fireEvent.input(screen.getByTestId('resume'), {
      target: {
        files: [new File(['test'], 'test.pdf', { type: 'application/pdf' })],
      },
    });
    fireEvent.input(
      screen.getByRole('textbox', { name: /about/, exact: false }),
      {
        target: {
          value: 'About me',
        },
      }
    );
    fireEvent.submit(screen.getByRole('button', { name: /Save and Continue/ }));
    expect(mockDispatch).toHaveBeenCalled();
  });
});
