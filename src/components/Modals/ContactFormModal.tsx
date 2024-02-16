import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import axios from "axios";

type ContactFormModalProps = {
  buttonText: string;
};

const ContactFormModal: React.FC<ContactFormModalProps> = ({ buttonText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async () => {
    // Get form data
    const firstName = (document.getElementById("firstName") as HTMLInputElement)
      .value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phoneNumber = (
      document.getElementById("phoneNumber") as HTMLInputElement
    ).value;
    const message = (document.getElementById("message") as HTMLInputElement)
      .value;

    try {
      // Send email data to backend for processing
      await axios.post("/api/send-email", {
        firstName,
        lastName,
        email,
        phoneNumber,
        message,
      });
      alert("Email sent successfully!");
      onClose(); // Close the modal after successful submission
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 drop-shadow-xl">
      <Button
        style={{
          backgroundImage: "linear-gradient(to right,#54a0d7, #e75909 )",
        }}
        onPress={onOpen}
        className="max-w-fit text-lg m-4 text-white font-semibold drop-shadow-lg"
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} placement="auto" onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
          <ModalBody>
            <Input
              id="firstName"
              isRequired
              fullWidth
              size="sm"
              label="First Name"
            />
            <Input
              id="lastName"
              isRequired
              fullWidth
              size="sm"
              label="Last Name"
            />
            <Input
              id="email"
              isRequired
              fullWidth
              size="sm"
              label="Email"
              type="email"
            />
            <Input
              id="phoneNumber"
              isRequired
              fullWidth
              size="sm"
              label="Phone Number"
              type="tel"
            />
            <Input
              id="message"
              isRequired
              fullWidth
              size="lg"
              className=""
              label="Message"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={handleSubmit}>
              Send
            </Button>
            <Button color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
