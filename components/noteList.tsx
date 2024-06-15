import React from "react";
import {
  FlatList,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import NoteDetail from "./noteDetail";

type Note = {
  title: string;
  content: string;
};

type NoteListProps = {
  notes: Note[];
  selectedNoteIndex: number | null;
  onDeleteNote: (index: number) => void;
  onSelectNote: (index: number) => void;
  onUpdateNoteContent: (index: number, content: string) => void;
};

const NoteList: React.FC<NoteListProps> = ({
  notes,
  selectedNoteIndex,
  onDeleteNote,
  onSelectNote,
  onUpdateNoteContent,
}) => {
  return (
    <FlatList
      data={notes}
      renderItem={({ item, index }) => (
        <View>
          <View style={styles.noteItem}>
            <TouchableOpacity onPress={() => onSelectNote(index)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
            <Button title="Delete" onPress={() => onDeleteNote(index)} />
          </View>
          {selectedNoteIndex === index && (
            <NoteDetail
              noteContent={item.content}
              onUpdateNoteContent={(content) =>
                onUpdateNoteContent(index, content)
              }
            />
          )}
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default NoteList;
