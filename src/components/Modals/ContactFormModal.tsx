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

type ContactFormModalProps = {
  buttonText: string;
};

const ContactFormModal: React.FC<ContactFormModalProps> = ({ buttonText }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
      <Modal isOpen={isOpen} placement="auto" onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Contact Us
              </ModalHeader>
              <ModalBody>
                <Input isRequired fullWidth size="sm" label="First Name" />
                <Input isRequired fullWidth size="sm" label="Last Name" />
                <Input isRequired fullWidth size="sm" label="Email" />
                <Input isRequired fullWidth size="sm" label="Phone Number" />
                <Input
                  isRequired
                  fullWidth
                  size="lg"
                  className=""
                  label="Message"
                />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onPress={onClose}>
                  Send
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
