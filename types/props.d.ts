import React from "react";

export = Props;
export as namespace Props;

/**
 * @description
 * This namespace contains types that are used for props.
 */
declare namespace Props {
  /**
   * @description
   * This type is used for components that might have a `children` prop.
   */
  type HasChildren = {
    children?: React.ReactNode;
  };
  /**
   * @description
   * This type is used for components that must have a `children` prop.
   */
  type ForceChildren = {
    children: React.ReactNode;
  };

  /**
   * @description
   * This type is used for components that might have a `className` prop.
   * It is useful for components that are styled with CSS or TAILWINDCSS.
   */
  type HasClassName = {
    className?: string;
  };

  /**
   * @description
   * This type is used for components that must have a `className` prop.
   * It is useful for components that are styled with CSS or TAILWINDCSS.
   */
  type ForceClassName = {
    className: string;
  };

  /**
   * @description
   * This type is used for components that might have an `onClick` prop.
   */
  type HasOnClick = {
    onClick?: (event: React.MouseEvent) => void;
  };

  /**
   * @description
   * This type is used for components that must have an `onClick` prop.
   */
  type ForceOnClick = {
    onClick: (event: React.MouseEvent) => void;
  };

  /**
   * @description
   * This type is used for components that might have an `onChange` prop.
   */
  type HasOnChange = {
    onChange?: (event: React.ChangeEvent) => void;
  };

  /**
   * @description
   * This type is used for components that must have an `onChange` prop.
   */
  type ForceOnChange = {
    onChange: (event: React.ChangeEvent) => void;
  };

  /**
   * @description
   * This type is used for components that might have an `onSubmit` prop.
   */
  type HasOnSubmit = {
    onSubmit?: (event: React.FormEvent) => void;
  };

  /**
   * @description
   * This type is used for components that must have an `onSubmit` prop.
   */
  type ForceOnSubmit = {
    onSubmit: (event: React.FormEvent) => void;
  };

  /**
   * @description
   * This type is used for components that might have an `id` prop.
   */
  type HasId = {
    id?: string;
  };

  /**
   * @description
   * This type is used for components that must have an `id` prop.
   */
  type ForceId = {
    id: string;
  };

  /**
   * @description
   * This type is used for components that might have an `name` prop.
   */
  type HasName = {
    name?: string;
  };

  /**
   * @description
   * This type is used for components that must have an `name` prop.
   */
  type ForceName = {
    name: string;
  };

  /**
   * @description
   * This type is used for components that might have an `value` prop.
   */
  type HasValue = {
    value?: string;
  };

  /**
   * @description
   * This type is used for components that must have an `value` prop.
   */
  type ForceValue = {
    value: string;
  };

  /**
   * @description
   * This type is used for components that might have an `type` prop.
   */
  type HasType = {
    type?: string;
  };

  /**
   * @description
   * This type is used for components that must have an `type` prop.
   */
  type ForceType = {
    type: string;
  };

  /**
   * @description
   * This type is used for components that might have an `placeholder` prop.
   */
  type HasPlaceholder = {
    placeholder?: string;
  };

  /**
   * @description
   * This type is used for components that must have an `placeholder` prop.
   */
  type ForcePlaceholder = {
    placeholder: string;
  };

  /**
   * @description
   * This type is used for components that might have an `disabled` prop.
   */
  type HasDisabled = {
    disabled?: boolean;
  };

  /**
   * @description
   * This type is used for components that must have an `disabled` prop.
   */
  type ForceDisabled = {
    disabled: boolean;
  };

  /**
   * @description
   * This type is used for components that might have an `required` prop.
   */
  type HasRequired = {
    required?: boolean;
  };

  /**
   * @description
   * This type is used for components that must have an `required` prop.
   */
  type ForceRequired = {
    required: boolean;
  };

  /**
   * @description
   * This type is used for components that might have an `checked` prop.
   */
  type HasChecked = {
    checked?: boolean;
  };

  /**
   * @description
   * This type is used for components that must have an `checked` prop.
   */
  type ForceChecked = {
    checked: boolean;
  };

  /**
   * @description
   * This type is used for components that might have an `src` prop.
   */
  type HasSrc = {
    src?: string;
  };

  /**
   * @description
   * This type is used for components that must have an `src` prop.
   */
  type ForceSrc = {
    src: string;
  };

  // COMBINATIONS

  /**
   * @description
   * This type is used for components that might have a `children` and `className` prop.
   * It is useful for components that are styled with CSS or TAILWINDCSS.
   */
  type HasChildrenAndClassName = HasChildren & HasClassName;

  /**
   * @description
   * This type is used for components that must have a `children` and `className` prop.
   * It is useful for components that are styled with CSS or TAILWINDCSS.
   */
  type ForceChildrenAndClassName = ForceChildren & ForceClassName;
}
