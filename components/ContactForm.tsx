"use client";
import React from "react";
import { TextField } from "@mui/material";
import {
  createTheme,
  ThemeProvider,
  Theme,
  useTheme,
} from "@mui/material/styles";

const customTheme = (outerTheme: Theme) =>
  createTheme({
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& label.Mui-focused": {
              color: "orange",
            },
          },
        },
      },
    },
  });

const ContactForm = () => {
  const outerTheme = useTheme();
  return (
    <ThemeProvider theme={customTheme(outerTheme)}>
      <form>
        <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
        <div className="mb-6">
          <TextField
            placeholder="Your name"
            label="Required"
            className="w-full text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-6">
          <TextField
            placeholder="E-mail"
            label="Required"
            className="w-full text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
          />
        </div>
        <div className="mb-6">
          <TextField
            placeholder="Your Message"
            label="Required"
            className="w-full text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
            multiline
            minRows={5}
          />
        </div>
        <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-orange-500 hover:bg-orange-400">
          Send a message
        </button>
      </form>
    </ThemeProvider>
  );
};

export default ContactForm;
