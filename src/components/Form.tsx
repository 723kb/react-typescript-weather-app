type FormProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (prpos: FormProps) => {
  return (
    <form onSubmit={prpos.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => prpos.setCity(e.target.value)}
        value={prpos.city}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;

// 第3章まで完了
