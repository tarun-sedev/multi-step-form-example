import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCandidateDetails } from '../store/selectors';
import { moveToNextPage, moveToPreviousPage } from '../store/slices/page-slice';
import { setProfessionalInfo } from '../store/slices/candidate-slice';
import { SecondaryButton, PrimaryButton } from './ui/Buttons';
import { InputArea, InputFile, InputText } from './ui/FormInputs';

function ProfessionalDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { gitProfile, resume, coverLetter, about } = useSelector(
    selectCandidateDetails
  );
  const [fileNames, setFileNames] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let resumeFileName = resume?.name;
    let coverFileName = coverLetter?.name;
    setFileNames([resumeFileName, coverFileName]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFileNames]);

  const onSubmit = (data) => {
    const selectedData = { ...data };
    selectedData.resume = selectedData?.resume[0] || resume;
    selectedData.coverLetter = selectedData?.coverLetter[0] || coverLetter;
    dispatch(setProfessionalInfo(selectedData));
    dispatch(moveToNextPage());
  };

  const onBackClick = () => {
    dispatch(moveToPreviousPage());
  };

  return (
    <>
      <SecondaryButton onClick={onBackClick}>Back</SecondaryButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          name="gitProfile"
          label="Git Profile"
          value={gitProfile}
          errors={errors}
          registerProps={register('gitProfile', {
            required: 'Git Profile is required',
            pattern: {
              value:
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: 'Git Profile url is not valid',
            },
          })}
        />
        <InputFile
          name="resume"
          label="Upload Resume"
          value={fileNames[0]}
          errors={errors}
          registerProps={register('resume', {
            required: fileNames[0] ? false : 'Resume is required',
          })}
        />
        <InputFile
          name="coverLetter"
          label="Upload Cover Letter"
          value={fileNames[1]}
          registerProps={register('coverLetter')}
        />
        <InputArea
          name="about"
          label="About"
          value={about}
          errors={errors}
          registerProps={register('about', {
            required: 'About information is required',
          })}
        />
        <div className="mt-4 d-flex justify-content-end">
          <PrimaryButton type="submit">Save and Continue</PrimaryButton>
        </div>
      </form>
    </>
  );
}

export default ProfessionalDetails;
