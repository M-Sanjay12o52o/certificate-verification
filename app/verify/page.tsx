"use client";

import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

type Props = {};

const Verify = (props: Props) => {
  const [uniqueId, setUniqueId] = useState<string | null>("");

  const handleUniqueIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUniqueId(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:3001/students");
      const students: Student[] = response.data;

      let uniqueIdExists = false;

      students.forEach((student: Student) => {
        // console.log("Email: ", student.email);
        if (uniqueId === student.uniqueId) {
          console.log("Unique Id exists: ", student.uniqueId);
          uniqueIdExists = true;
          return;
        }
      });

      if (!uniqueIdExists) {
        console.log("Unique Id doesn't exists");
      }
    } catch (error) {
      console.log("Error fetching or processing data: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Verify Certificate </h1>
      <input
        type="text"
        value={uniqueId || ""}
        onChange={handleUniqueIdChange}
      />
      <button type="submit">Verify</button>

      <Link href={"/"}>Back to home page</Link>
    </form>
  );
};

export default Verify;
