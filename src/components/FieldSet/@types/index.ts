import React, { ComponentProps, ComponentType, ElementType, ReactElement } from 'react';
import { Field } from 'src/components/Field';

type ChildType = ReactElement<ComponentProps<typeof Field>>;

export type FieldSetProps = {
  children?: ChildType | ChildType[];
  className?: string;
};
