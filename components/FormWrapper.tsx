import { ReactNode } from 'react';

type FormWrapperProps = {
  children: ReactNode;
};

export function FormWrapper({ children }: FormWrapperProps) {
  return (
    <>
      <div className="p-5">{children}</div>
    </>
  );
}
