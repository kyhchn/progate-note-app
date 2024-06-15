// components/NoteInput.tsx

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

type NoteInputProps = {
  onAddNote: (title: string) => void;
};

const NoteInput: React.FC<NoteInputProps> = ({ onAddNote }) => {
  const [noteTitle, setNoteTitle] = useState("");

  const addNote = () => {
    if (noteTitle.trim() !== "") {
      onAddNote(noteTitle);
      setNoteTitle("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a note title"
        value={noteTitle}
        onChangeText={setNoteTitle}
      />
      <Button title="Add" onPress={addNote} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginRight: 8,
  },
});

export default NoteInput;
