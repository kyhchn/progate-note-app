// components/NoteDetail.tsx

import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type NoteDetailProps = {
  noteContent: string;
  onUpdateNoteContent: (content: string) => void;
};

const NoteDetail: React.FC<NoteDetailProps> = ({
  noteContent,
  onUpdateNoteContent,
}) => {
  return (
    <View style={styles.detailContainer}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Note content"
        value={noteContent}
        onChangeText={onUpdateNoteContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    minHeight: 100,
    textAlignVertical: "top",
  },
});

export default NoteDetail;
