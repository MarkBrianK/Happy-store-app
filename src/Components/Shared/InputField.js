import React from "react";

export default function InputField({
  label,
  type,
  placeholder,
  value,
  onChange,
  children,
}) {
  return <div className="p-3 mb-1">{children}</div>;
}
