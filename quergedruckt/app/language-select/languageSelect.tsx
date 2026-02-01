"use client";

import React, { useState, useEffect } from "react";
import { Button, Menu, MenuItem, ListItemIcon } from "@mui/material";

const languages = [
  { code: "en", flag: "🇬🇧" },
  { code: "de", flag: "🇩🇪" },
];

const LanguageSelect = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch safely — defer flag render until client
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  if (!mounted) return null;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = (code?: string) => {
    if (code) setLanguage(code);
    setAnchorEl(null);
    // i18n.changeLanguage(code);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="text"
        sx={{ minWidth: 0, p: 1 }}
      >
        <span style={{ fontSize: "1.5rem" }}>
          {languages.find((l) => l.code === language)?.flag}
        </span>
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {languages.map(({ code, flag }) => (
          <MenuItem key={code} onClick={() => handleClose(code)}>
            <ListItemIcon sx={{ minWidth: "auto" }}>
              <span style={{ fontSize: "1.5rem" }}>{flag}</span>
            </ListItemIcon>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSelect;
