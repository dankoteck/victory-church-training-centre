import { type FieldApi } from "@tanstack/react-form";

export default function FieldInfo({
  field,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: FieldApi<any, any, any, any>;
}) {
  return (
    <em
      role="alert"
      className="absolute left-0 top-full block w-fit text-red-600"
    >
      {field.state.meta.touchedErrors.join(", ")}
    </em>
  );
}
