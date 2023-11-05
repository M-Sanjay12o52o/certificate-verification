type Email = {
  email: string | undefined;
};

interface Student {
  name: string;
  email: string;
  id: number;
  uniqueId?: string | null;
}
