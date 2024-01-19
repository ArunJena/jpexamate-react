export type Note = {
  title: string;
  url: string;
};

export type Topic = {
  title: string;
  availableNotes: Note[];
};

export type Subject = {
  title: string;
  availableTopics: Topic[];
};

export type Standards = {
  title: string;
  availableSubjects?: Subject[];
};
