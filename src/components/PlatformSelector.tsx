import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import React from "react";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
interface Props {
  onSelectPlatform: (platform :Platform) => void
  selectedPlatform: Platform
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props ) => {
  const { data , error} = usePlatforms();

  if(error) return null
  return (
    <Box ml={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform.name}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
