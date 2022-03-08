import styled from "styled-components";
import { tablet } from "../../../../devices";

const FilterGrid = styled.div`
  display: flex;
  margin: 15px 0px;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
`;

const FilterButton = styled.button`
    transition: all ease .3s;
  font-family: "Prompt";
  border: 1px solid #efefef;
  border-radius: 100px;
  padding: 10px;
  color: var(--textColor);
  background: #fff;
  margin: 10px;
  cursor: pointer;

  &:active,
  &:hover,
  &.active {
    background: var(--textColor);
    color: #fff;
  }

  @media screen and (min-width: ${tablet}) {
    margin: 5px;
    padding: 7.5px 12.5px;
  }
`;

const Filter = ({ options, isActive, setIsActive }) => {
  return (
    <FilterGrid>
      {options.map((option) => (
        <FilterButton
          className={isActive === option.id ? "active" : ""}
          onClick={() => setIsActive(option.id)}
          key={option.id}
          value={option.id}
        >
          {option.label}
        </FilterButton>
      ))}
    </FilterGrid>
  );
};

export default Filter;
