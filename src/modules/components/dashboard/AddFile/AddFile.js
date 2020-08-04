import React from 'react';
import { FormControl, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { CreateFilecoinStorageDeal } from "slate-react-system";

const AddFile = ({
  handleChange, _handleSubmit, value,
}) => (
  <div className="add-file-dialog">
    <div className="default-settings form-field">
      <FormControl>
        <label className="heading">Uploads to</label>
        <RadioGroup aria-label="server" name="server1" value={value} onChange={handleChange}>
          <FormControlLabel value="ipfs" control={<Radio classes={{ root: 'radio-style-root' }} />} label="IPFS" />
          <FormControlLabel value="filecoin" control={<Radio classes={{ root: 'radio-style-root' }} />} label="Filecoin" />
          <FormControlLabel value="both" control={<Radio classes={{ root: 'radio-style-root' }} />} label="Both" />
        </RadioGroup>
      </FormControl>
    </div>
    <div className="add-file-details form-field">
      <label className="heading">Add File</label>
      <div className="file-details">
        <CreateFilecoinStorageDeal onSubmit={_handleSubmit} />
      </div>
    </div>
  </div>
);

export default AddFile;
