import { useDispatch, useSelector } from 'react-redux';
import { selectCandidateDetails, selectLoading } from '../store/selectors';
import { postCandidateAction } from '../store/slices/candidate-slice';
import { moveToPreviousPage } from '../store/slices/page-slice';
import { SecondaryButton, LoaderButton } from './ui/Buttons';
import { prepareData } from '../utils/postFormUtils';
import ListItem from './ui/ListItem';

const listItemlabel = {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  phoneNumber: 'Phone Number',
  liveInUS: 'Live In US?',
  gitProfile: 'Git Profile',
  resume: 'Resume',
  coverLetter: 'Cover Letter',
  about: 'About',
};

function Review() {
  const candidate = useSelector(selectCandidateDetails);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const onBackClick = () => {
    dispatch(moveToPreviousPage());
  };

  const onSubmit = () => {
    dispatch(postCandidateAction(prepareData(candidate)));
  };

  const listItems = {
    ...candidate,
    liveInUS: candidate.liveInUS ? 'YES' : 'NO',
    resume: candidate?.resume?.name,
    coverLetter: candidate?.coverLetter?.name,
  };
  return (
    <>
      <SecondaryButton onClick={onBackClick}>Back</SecondaryButton>
      <dl className="row">
        {Object.keys(listItemlabel).map((label) => {
          return (
            <ListItem
              key={label}
              label={listItemlabel[label]}
              value={listItems[label]}
            />
          );
        })}
      </dl>
      <div className="mt-3 d-flex justify-content-end">
        <LoaderButton onClick={onSubmit} isLoading={isLoading}>
          Review and Submit
        </LoaderButton>
      </div>
    </>
  );
}

export default Review;
