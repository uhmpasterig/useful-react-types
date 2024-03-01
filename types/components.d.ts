import React from "react";

export = Components;
export as namespace Components;

/**
 * @description
 * This namespace contains types that are used for component props.
 */
declare namespace Components {
  /**
   * @description
   * This type is used for the `Button` component.
   */
  type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

  /**
   * @description
   * This type is used for the `Anchor` component.
   */
  type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

  /**
   * @description
   * This type is used for the `Image` component.
   */
  type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

  /**
   * @description
   * This type is used for the `Video` component.
   */
  type VideoProps = React.VideoHTMLAttributes<HTMLVideoElement>;

  /**
   * @description
   * This type is used for the `Input` component.
   */
  type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * @description
   * This type is used for the `Select` component.
   */
  type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

  /**
   * @description
   * This type is used for the `Textarea` component.
   */
  type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

  /**
   * @description
   * This type is used for the `Checkbox` component.
   */
  type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * @description
   * This type is used for the `Radio` component.
   */
  type RadioProps = React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * @description
   * This type is used for the `Label` component.
   */
  type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

  /**
   * @description
   * This type is used for the `Form` component.
   */
  type FormProps = React.FormHTMLAttributes<HTMLFormElement>;

  /**
   * @description
   * This type is used for the `Fieldset` component.
   */
  type FieldsetProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement>;

  /**
   * @description
   * This type is used for the `Legend` component.
   */
  type LegendProps = React.HTMLAttributes<HTMLLegendElement>;

  /**
   * @description
   * This type is used for the `Progress` component.
   */
  type ProgressProps = React.ProgressHTMLAttributes<HTMLProgressElement>;

  /**
   * @description
   * This type is used for the `Meter` component.
   */
  type MeterProps = React.MeterHTMLAttributes<HTMLMeterElement>;

  /**
   * @description
   * This type is used for the `Output` component.
   */
  type OutputProps = React.OutputHTMLAttributes<HTMLOutputElement>;

  /**
   * @description
   * This type is used for the `Details` component.
   */
  type DetailsProps = React.DetailsHTMLAttributes<HTMLDetailsElement>;

  /**
   * @description
   * This type is used for the `Dialog` component.
   */
  type DialogProps = React.DialogHTMLAttributes<HTMLDialogElement>;
}
