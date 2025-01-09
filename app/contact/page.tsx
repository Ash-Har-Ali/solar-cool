import ContactForm from '../components/ContactForm';

export default function ContactUsPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm
        onSuccessMessage="Thank you! Your details have been submitted."
        onErrorMessage="Oops! Something went wrong."
      />
    </div>
  );
}
