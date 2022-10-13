import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { Foot } from "../styled/Footer";

const Footer = () => {
	return (
		<Foot>
			<div>
				<p>Martin O. Ducau &copy; 2022</p>
			</div>
			<div>
				<Tooltip title="Repositorio de GitHub">
					<IconButton sx={{ color: "#fff" }}>
						<a
							href="https://github.com/ducau84"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon fontSize="medium"/>
						</a>
					</IconButton>
				</Tooltip>
				<Tooltip title="Perfil de LinkedIn">
					<IconButton sx={{ color: "#fff" }}>
						<a
							href="https://www.linkedin.com/in/martin-ducau/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedInIcon fontSize="medium"/>
						</a>
					</IconButton>
				</Tooltip>
			</div>
		</Foot>
	);
};

export default Footer;
