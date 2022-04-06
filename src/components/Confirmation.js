import { useDispatch } from 'react-redux';
import { moveToHome } from '../store/slices/page-slice';
import { PrimaryButton } from './ui/Buttons';

function Confirmation() {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(moveToHome());
  };

  return (
    <div className="row text-center">
      <h3>Data Successfully Submit</h3>
      <div className="mt-5 d-flex justify-content-center">
        <PrimaryButton type="submit" onClick={onClick}>
          Back to Home
        </PrimaryButton>
      </div>
    </div>
  );
}

export default Confirmation;
