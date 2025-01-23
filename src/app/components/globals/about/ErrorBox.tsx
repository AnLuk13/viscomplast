import React from "react";
import styles from "@/app/styles/globals/aboutSection.module.scss";

function ErrorBox({ errors }: { errors: Record<string, string> }) {
  return (
    <>
      {errors && (
        <div className={styles.errorBox}>
          {Object.entries(errors).map(([field, error]) =>
            error ? (
              <div key={field} className={styles.errorText}>
                {error}
              </div>
            ) : null,
          )}
        </div>
      )}
    </>
  );
}

export default ErrorBox;
