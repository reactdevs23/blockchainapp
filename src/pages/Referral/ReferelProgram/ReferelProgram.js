import React, { useState } from "react";
import classes from "./ReferelProgram.module.css";
import { Text } from "../../../components/common";

import { FaCheck } from "react-icons/fa6";

import { copyIcon, referImg } from "../../../images";

const ReferelProgram = () => {
  const copyAddressToClipboard = (depositAddress) => {
    // Copy deposit address to clipboard
    navigator.clipboard.writeText(depositAddress);
  };
  const [codeCopied, setCodeCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.infoWrapper}>
          <img src={referImg} alt="#" className={classes.referImg} />
          <Text base0 xl textCenter font600>
            Referral Program
          </Text>
          <Text base500 textCenter className={classes.info}>
            Refer and Earn is a promotional program where individuals can earn
            rewards or benefits by referring others.
          </Text>
        </div>

        <div className={classes.infoContainer}>
          <div className={classes.codeContainer}>
            <Text base500>Refer Code</Text>
            <div className={classes.code}>
              <Text base0 base>
                ABCDEB6
              </Text>
              {codeCopied ? (
                <div className={classes.copied}>
                  <FaCheck className={classes.icon} />
                </div>
              ) : (
                <div className={classes.iconContainer}>
                  <img
                    src={copyIcon}
                    alt="#"
                    className={classes.copyIcon}
                    onClick={() => {
                      copyAddressToClipboard("ABCDEB6");
                      setCodeCopied(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>{" "}
          <div className={classes.linkContainer}>
            <Text base500>Refer Link</Text>
            <div className={classes.link}>
              <Text base0 base className={classes.linkText}>
                {"    http://www.example.com/refer/abc123456"}
              </Text>

              {linkCopied ? (
                <div className={classes.copied}>
                  <FaCheck className={classes.icon} />
                </div>
              ) : (
                <div className={classes.iconContainer}>
                  <img
                    src={copyIcon}
                    alt="#"
                    className={classes.copyIcon}
                    onClick={() => {
                      copyAddressToClipboard(
                        "http://www.example.com/refer/abc123456"
                      );
                      setLinkCopied(true);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferelProgram;
