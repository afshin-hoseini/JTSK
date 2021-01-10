import { Children, isValidElement, ReactElement, useMemo } from 'react';

/**
 * Extract title from given children and concat them using the given seperator.
 * @param children The children components that the title would be extracted from
 * @param seperator A character to separate the titles with. @default "/"
 * @returns Concatinated tiles which using the seperator string,
 * and a required field determining that at least one of the childrens is required.
 * It also returns a field called error which is an array of errors the fields may have.
 */
export const useExtractDataFromFields = <T extends { title?: string; required?: boolean; error?: string }>(
  children?: ReactElement<T> | ReactElement<T>[],
  seperator = '/'
) => {
  const result = useMemo(() => {
    if (!children) return {};

    const data = Children.map(children, (child) => {
      if (isValidElement(child)) {
        const props = child?.props as T;
        return { title: props?.title || '', required: props?.required, error: props?.error };
      }
      return { title: '', required: false };
    });

    const errors = data.filter((d) => !!d.error).map((d) => d.error);
    return {
      required: data.some((d) => d.required),
      title: data.map((d) => d.title).join(seperator),
      errors: (errors?.length ?? 0) > 0 ? errors : undefined,
    };
  }, [children, seperator]);

  return result;
};
