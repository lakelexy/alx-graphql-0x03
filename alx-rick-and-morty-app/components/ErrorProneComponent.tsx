// components/ErrorProneComponent.tsx
const ErrorProneComponent: React.FC = () => {
  // This component will throw an error when rendered
  throw new Error("This is a test error!");
};

export default ErrorProneComponent;
