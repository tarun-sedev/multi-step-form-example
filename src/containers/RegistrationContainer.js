import { useSelector } from 'react-redux';
import CandidateDetails from '../components/CandidateDetails';
import Confirmation from '../components/Confirmation';
import ProfessionalDetails from '../components/ProfessionalDetails';
import Review from '../components/Review';
import { selectSelectedPage } from '../store/selectors';

function RegistraionContainer() {
  const page = useSelector(selectSelectedPage);
  return (
    <div className="container">
      <div className="row text-center">
        <h1>Candidate Registration Form</h1>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 bg-white p-5">
          {page === 1 && <CandidateDetails />}
          {page === 2 && <ProfessionalDetails />}
          {page === 3 && <Review />}
          {page === 4 && <Confirmation />}
        </div>
      </div>
    </div>
  );
}

export default RegistraionContainer;
