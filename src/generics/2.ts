type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  function compare<T extends keyof AllType, U extends keyof AllType> (top: Pick<AllType, T>, bottom: Pick<AllType, U>
  ): AllType {
    return {
      name: (top as any).name,
      color: (top as any).color,
      position: (bottom as any).position,
      weight: (bottom as any).weight,
    };
  }

  export default console.log(compare ({name:'Beauty', color: 'spotted'}, {position:10, weight: 1.5}));