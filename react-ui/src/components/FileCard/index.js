/** @format */

import React from "react";
import PropTypes from "prop-types";
import StyledFileCard, {
	FileIcon,
	FileName,
	FileSize,
	Options,
	Time,
} from "./style";
import { ReactComponent as FileZip } from "stories/assets/icons/fileZip.svg";
import { ReactComponent as FileExcel } from "stories/assets/icons/fileExcel.svg";
import { ReactComponent as FileWord } from "stories/assets/icons/fileWord.svg";
import { ReactComponent as FilePpt } from "stories/assets/icons/filePpt.svg";
import { ReactComponent as FileImage } from "stories/assets/icons/fileImage.svg";
import { ReactComponent as FilePdf } from "stories/assets/icons/filePdf.svg";
import { ReactComponent as OptionsIcon } from "stories/assets/icons/options.svg";
import Icon from "components/Icon";

const fileIcons = {
	zip: FileZip,
	image: FileImage,
	pdf: FilePdf,
	word: FileWord,
	excel: FileExcel,
	ppt: FilePpt,
};

function FileCard({ children, ...rest }) {
	return (
		<StyledFileCard {...rest}>
			<FileIcon icon={fileIcons.zip} />
			<FileName>Source Code.zip</FileName>
			<FileSize>1.5M</FileSize>
			<Options>
				<Icon icon={OptionsIcon} opacity={0.3} />
			</Options>
			<Time>05-Aug-2020</Time>
		</StyledFileCard>
	);
}

FileCard.propTypes = {
	children: PropTypes.any,
};

export default FileCard;
