import { ReactNode } from 'react';

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      {/* <h2 className="text-blue-800 font-bold mb-4 mt-2">{title}</h2> */}
      <div className="p-5">{children}</div>
    </>
  );
}
