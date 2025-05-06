export function useMDXComponents(components) {
  return {
    a: ({ children, ...props }) => (
      <a className="link" {...props}>
        {children}
      </a>
    ),
    ...components,
  };
}
