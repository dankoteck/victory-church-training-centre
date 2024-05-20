import { useForm, type FieldApi } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { z } from "zod";

import { UIButton } from "@/components";
import { cn } from "@/utils/cn";
import { FormEvent } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FieldInfo({ field }: { field: FieldApi<any, any, any, any> }) {
  return (
    <em
      role="alert"
      className="absolute left-0 top-full block w-fit text-red-600"
    >
      {field.state.meta.touchedErrors.join(", ")}
    </em>
  );
}

export default function CreateNewProgramForm() {
  const form = useForm({
    defaultValues: {
      code: "",
      name: "",
      level: 0,
    },
    validatorAdapter: zodValidator,
    onSubmit: async ({ value, formApi }) => {
      await new Promise((r) => setTimeout(r, 1000));
      console.log(value);
      formApi.reset();
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  return (
    <section className="container max-w-screen-lg space-y-10 py-[100px]">
      <h1 className="text-4xl tracking-[0.96px] text-gray-900">
        Create New Program
      </h1>

      <form onSubmit={handleSubmit} className="space-y-16">
        <form.Field
          name="code"
          validators={{
            onBlur: z
              .string({ required_error: "Program's Code is required !" })
              .min(3, { message: "Program's Code at least 3 characters !" }),
          }}
          children={(field) => (
            <div className="relative space-y-2">
              <label
                className="text-lg leading-[1.5] tracking-[0.64px] text-gray-900"
                htmlFor={field.name}
              >
                Code
              </label>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-300 px-4 py-3 text-xl text-gray-900 outline-0 ring-0 placeholder:text-lg placeholder:text-gray-300"
                placeholder="Input your Program's Code..."
              />
              <FieldInfo field={field} />
            </div>
          )}
        />

        <form.Field
          name="name"
          validators={{
            onBlur: z
              .string({ required_error: "Program's Name is required !" })
              .min(5, { message: "Program's Name at least 5 characters !" }),
          }}
          children={(field) => (
            <div className="relative space-y-2">
              <label
                className="text-lg leading-[1.5] tracking-[0.64px] text-gray-900"
                htmlFor={field.name}
              >
                Name
              </label>
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="mt-2 w-full rounded-full border border-gray-300 px-4 py-3 text-xl text-gray-900 outline-0 ring-0 placeholder:text-lg placeholder:text-gray-300"
                placeholder="Input your Program's Name..."
              />
              <FieldInfo field={field} />
            </div>
          )}
        />

        <form.Field
          name="level"
          validators={{
            onSubmit: z
              .number()
              .positive({ message: "Program's Level is required !" }),
          }}
          children={(field) => (
            <div className="relative space-y-2">
              <label
                className="text-lg leading-[1.5] tracking-[0.64px] text-gray-900"
                htmlFor={field.name}
              >
                Level
              </label>
              <select
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(parseInt(e.target.value))}
                className={cn(
                  "mt-2 w-full rounded-full border border-gray-300 px-4 py-3 text-xl text-gray-900 outline-0 ring-0",
                  {
                    "text-gray-300": field.state.value === 0,
                  },
                )}
              >
                <option disabled value={0} hidden>
                  Select your Program's Level...
                </option>
                <option value={1}>Level 01</option>
                <option value={2}>Level 02</option>
                <option value={3}>Level 03</option>
                <option value={4}>Level 04</option>
              </select>
              <FieldInfo field={field} />
            </div>
          )}
        />

        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <UIButton
              className="w-full text-lg"
              type="submit"
              disabled={!canSubmit}
              loading={isSubmitting}
            >
              Create
            </UIButton>
          )}
        />
      </form>
    </section>
  );
}
