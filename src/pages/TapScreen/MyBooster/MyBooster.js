import React, { useEffect, useState } from "react";
import classes from "./MyBooster.module.css";
import { placholder } from "../../../images";
import { Heading } from "../../../components/common";
import DeleteBoosterModal from "../../../Modals/DeleteBoosterModal/DeleteBoosterModal";

import DeleteBoosterSuccessfulModal from "../../../Modals/DeleteBoosterSuccessfulModal/DeleteBoosterSuccessfulModal";

import SingleMyBooster from "./SingleMyBooster/SingleMyBooster";

const MyBooster = () => {
  const [showDeleteBoosterModal, setShowDeleteBoosterModal] = useState(false);
  const [succesFullyDeletedModal, setShowSuccessFullyDeletedModal] =
    useState(false);
  const myBoosters = [
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
    {
      img: placholder,
      title: "GameFi Tokens",
      profitPerHour: 50,
      balance: "10K",
      level: 0,
    },
  ];
  useEffect(() => {
    if (succesFullyDeletedModal) {
      const timer = setTimeout(() => {
        setShowSuccessFullyDeletedModal(false);
      }, 2000);
      return () => clearTimeout(timer); // Cleanup the timer on unmount
    }
  }, [succesFullyDeletedModal]);

  return (
    <>
      <div
        className={classes.wrapper}
        onClick={() => {
          if (succesFullyDeletedModal) {
            setShowSuccessFullyDeletedModal(false);
          }
        }}
      >
        <Heading xl base0 semiBold>
          My Booster
        </Heading>
        <div className={classes.items}>
          {myBoosters.map((el, i) => (
            <SingleMyBooster
              {...el}
              key={i}
              onClick={() => setShowDeleteBoosterModal(true)}
            />
          ))}
        </div>
      </div>
      <DeleteBoosterModal
        isActive={showDeleteBoosterModal}
        onClose={() => setShowDeleteBoosterModal(false)}
        setSuccessFullyDeleted={setShowSuccessFullyDeletedModal}
      />
      <DeleteBoosterSuccessfulModal
        isActive={succesFullyDeletedModal}
        onClose={() => setShowSuccessFullyDeletedModal(false)}
      />
    </>
  );
};
export default MyBooster;
