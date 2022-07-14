import clsx from "clsx";

interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "medium" | "large";
  children: React.ReactNode | React.ReactNode[];
}

function getClassName({ className }: { className?: string }) {
  return clsx(
    "group relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition",
    className
  );
}

/**TODO
 *
 * Create some variants
 *
 * Some style not working (idk)
 *
 */
function ButtonInner({
  children,
  variant,
  size,
}: Pick<ButtonProps, "children" | "variant" | "size">) {
  return (
    <>
      <div
        className={clsx(
          "focus-ring bg-inverse absolute inset-0 transform rounded-full opacity-100 transition disabled:opacity-50"
        )}
      />

      <div
        className={clsx(
          "relative flex h-full w-full items-center justify-center whitespace-nowrap text-white dark:text-black"
        )}
      >
        {children}
      </div>
    </>
  );
}

function Button({
  children,
  variant = "primary",
  size = "large",
  className,
  ...buttonProps
}: ButtonProps & JSX.IntrinsicElements["button"]) {
  return (
    <button {...buttonProps} className={getClassName({ className })}>
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </button>
  );
}

export { Button };
