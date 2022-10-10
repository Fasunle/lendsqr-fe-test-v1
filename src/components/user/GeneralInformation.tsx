type InformationType = {
  kind: string;
  description: string;
};

const Information = ({ description, kind }: InformationType) => (
  <div className='info'>
    <h3 className='kind text-lg'>{kind}</h3>
    <b className='description  text-base'>{description}</b>
  </div>
);

export const GeneralInformation = () => {
  return (
    <div className='general-information'>
      {/* personal */}
      <div className='personal'>
        <h2 className='title text-2xl'>Personal Information</h2>
        <div className='details'>
          <Information kind='Full Name' description='Grace Effiom' />
          <Information kind='Phone Number' description='07060780922' />
          <Information kind='Email Address' description='grace@gmail.com' />
          <Information kind='Bvn' description='07060780922' />
          <Information kind='Gender' description='Female' />
          <Information kind='Marital status' description='Single' />
          <Information kind='Children' description='None' />
          <Information kind='Type of residence' description="Parent's Apartment" />
          <Information kind='' description='' />
          <Information kind='' description='' />
        </div>
      </div>
      <div className='dividerContainer'>
        <div className='divider' />
      </div>
      {/* education and employment */}
      <div className='employment-and-education text-lg'>
        <h2 className='title text-2xl'>Education and Employment</h2>
        <div className='details'>
          <Information kind='level of education' description='B.Sc' />
          <Information kind='Employment Status' description='Employed' />
          <Information kind='sector of employment' description='FinTech' />
          <Information kind='office email' description='' />
          <Information kind='Duration of employment' description='2 years' />
          <Information kind='office email' description='grace@lendsqr.com' />
          <Information kind='Monthly income' description='₦200,000.00- ₦400,000.00' />
          <Information kind='loan repayment' description='40,000' />
        </div>
      </div>
      <div className='dividerContainer'>
        <div className='divider' />
      </div>
      {/* socials */}
      <div className='socials text-lg'>
        <h2 className='title text-2xl'>Socials</h2>
        <div className='details'>
          <Information kind='level of education' description='B.Sc' />
          <Information kind='Employment Status' description='Employed' />
          <Information kind='sector of employment' description='FinTech' />
          <Information kind='office email' description='' />
          <Information kind='Duration of employment' description='2 years' />
          <Information kind='office email' description='grace@lendsqr.com' />
          <Information kind='Monthly income' description='₦200,000.00- ₦400,000.00' />
          <Information kind='loan repayment' description='40,000' />
        </div>
      </div>
      <div className='dividerContainer'>
        <div className='divider' />
      </div>
      {/* Guarantors */}
      <div className='guarantors text-lg'>
        <h2 className='title text-2xl'>Guarantors</h2>
        <div className='details'>
          <Information kind='level of education' description='B.Sc' />
          <Information kind='Employment Status' description='Employed' />
          <Information kind='sector of employment' description='FinTech' />
          <Information kind='office email' description='' />
          <Information kind='Duration of employment' description='2 years' />
          <Information kind='office email' description='grace@lendsqr.com' />
          <Information kind='Monthly income' description='₦200,000.00- ₦400,000.00' />
          <Information kind='loan repayment' description='40,000' />
        </div>
      </div>
    </div>
  );
};
