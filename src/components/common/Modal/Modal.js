import classes from "./Modal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { IoArrowBack } from "react-icons/io5";

import clsx from "clsx";
import Text from "../Text/Text";

const Modal = ({
  heading,
  isActive,
  onClose,
  className,
  backButton,
  children,
  onBack,
  small,
  ...rest
}) => {
  return (
    <>
      {isActive && (
        <div
          className={clsx(
            isActive && classes.active,
            classes.modalOverlay,
            small && classes.smallModalOverlay
          )}
          onClick={onClose}
        />
      )}
      <div
        className={clsx(
          className,
          isActive && classes.active,

          classes.modal,
          "overflow"
        )}
        {...rest}
      >
        {heading && (
          <div className={classes.header}>
            {backButton && (
              <IoArrowBack className={classes.backButton} onClick={onBack} />
            )}
            <Text lg base0 semiBold>
              {heading}
            </Text>

            <AiOutlineClose className={classes.closeIcon} onClick={onClose} />
          </div>
        )}

        {children}
      </div>
    </>
  );
};

export default Modal;
