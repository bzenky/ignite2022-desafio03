import { useContext, useEffect, useState } from "react";
import { GithubDataContext } from "../../contexts/GithubDataContext";
import { Input, SearchInputContainer } from "./styles";

export function SearchInput() {
  const { SearchInputFilter } = useContext(GithubDataContext)
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    SearchInputFilter(inputSearch)
  }, [inputSearch])

  return (
    <SearchInputContainer>
      <Input
        type="text"
        placeholder="Buscar conteúdo"
        value={inputSearch}
        onChange={(event) => setInputSearch(event.target.value)}
      />
    </SearchInputContainer>
  )
}