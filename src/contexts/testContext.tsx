import React, { createContext, useEffect, useState } from "react";
import { TestContextState } from "../models/test.model";

const contextDefaultValues: TestContextState = {
  test: "test",
};

export const TestContext =
  createContext<TestContextState>(contextDefaultValues);

const TestProvider: React.FC = ({ children }) => {
  const [test, setTest] = useState(contextDefaultValues.test);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTest("New value");
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <TestContext.Provider
      value={{
        test,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
