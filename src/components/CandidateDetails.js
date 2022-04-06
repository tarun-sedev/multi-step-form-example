import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectCandidateDetails } from '../store/selectors';
import { setCandidateInfo } from '../store/slices/candidate-slice';
import { moveToNextPage } from '../store/slices/page-slice';
import { PrimaryButton } from './ui/Buttons';
import { InputCheckbox, InputText } from './ui/FormInputs';

function CandidateDetails() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { firstName, lastName, email, phoneNumber, liveInUS } = useSelector(
    selectCandidateDetails
  );
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(setCandidateInfo(data));
    dispatch(moveToNextPage());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputText
        name="firstName"
        label="First Name"
        value={firstName}
        errors={errors}
        registerProps={register('firstName', {
          required: 'First name is required',
        })}
      />
      <InputText
        name="lastName"
        label="Last Name"
        value={lastName}
        registerProps={register('lastName')}
      />
      <InputText
        name="email"
        label="Email"
        value={email}
        errors={errors}
        registerProps={register('email', {
          required: 'Email is required',
          pattern: {
            value: /(^$|^.*@.*\..*$)/,
            message: 'Email is not valid',
          },
        })}
      />
      <InputText
        name="phoneNumber"
        label="Phone Number"
        value={phoneNumber}
        errors={errors}
        registerProps={register('phoneNumber', {
          pattern: {
            value:
              /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/,
            message: 'Phone Number is not valid',
          },
        })}
      />
      <InputCheckbox
        name="liveInUS"
        label="Live In US? (Tick if YES)"
        checked={liveInUS}
        registerProps={register('liveInUS')}
      />
      <div className="mt-3 d-flex justify-content-end">
        <PrimaryButton type="submit">Save and Continue</PrimaryButton>
      </div>
    </form>
  );
}

export default CandidateDetails;
