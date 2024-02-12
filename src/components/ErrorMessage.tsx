import React from "react";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <div className="bg-red-400 border-2 border-red-600 rounded-2xl p-6">
      <h1 className="text-4xl font-bold text-red-900">{message}</h1>
    </div>
  );
};

export default ErrorMessage;
