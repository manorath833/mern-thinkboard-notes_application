import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes Controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    const savedNote = await note.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("error in createNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function UpdateNote(req, res) {
  try {
    const { title, content } = req.body;
    const UpdatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content },
      {
        new:true,
      }
    );

    if(!UpdatedNote) return res.status(404).json({message:"Note not found"});

    res.status(200).json(UpdatedNote);
  } catch (error) {
    console.error("error in UpdateNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function DeleteNote(req, res) {
  try {
    
    const DeletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!DeletedNote) return res.status(404).json({message:"Note not found"});
    res.status(200).json({message:"Note deleted successfully"});
  } catch (error) {
    console.error("error in DeleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
