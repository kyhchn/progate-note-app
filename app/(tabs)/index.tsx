import NoteInput from "@/components/noteInput";
import NoteList from "@/components/noteList";
import React, { useState } from "react";
import { ScrollView, View, StyleSheet } from "react-native";

type Note = {
  title: string;
  content: string;
};

export default function HomeScreen() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number | null>(
    null
  );

  const addNote = (title: string) => {
    setNotes([...notes, { title, content: "" }]);
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
    if (selectedNoteIndex === index) {
      setSelectedNoteIndex(null);
    }
  };

  const toggleNoteDetail = (index: number) => {
    setSelectedNoteIndex(selectedNoteIndex === index ? null : index);
  };

  const updateNoteContent = (index: number, content: string) => {
    const updatedNotes = [...notes];
    updatedNotes[index].content = content;
    setNotes(updatedNotes);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <NoteInput onAddNote={addNote} />
        <View>
          <NoteList
            notes={notes}
            selectedNoteIndex={selectedNoteIndex}
            onDeleteNote={deleteNote}
            onSelectNote={toggleNoteDetail}
            onUpdateNoteContent={updateNoteContent}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
