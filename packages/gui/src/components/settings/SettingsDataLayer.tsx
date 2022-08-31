import React from 'react';
import { Trans } from '@lingui/macro';
import { Flex, SettingsLabel } from '@chia/core';
import { FormGroup, FormControlLabel, Grid, Switch } from '@mui/material';
import useEnableDataLayerService from '../../hooks/useEnableDataLayerService';
import useEnableFilePropagationServer from '../../hooks/useEnableFilePropagationServer';

export default function SettingsDataLayer() {
  const [enableDataLayerService, setEnableDataLayerService] =
    useEnableDataLayerService();
  const [enableFilePropagationServer, setEnableFilePropagationServer] =
    useEnableFilePropagationServer();

  return (
    <Grid container>
      <Grid item xs={12} sm={6} lg={3}>
        <Flex flexDirection="column" gap={1}>
          <SettingsLabel>
            <Trans>Startup</Trans>
          </SettingsLabel>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={enableDataLayerService}
                  onChange={() =>
                    setEnableDataLayerService(!enableDataLayerService)
                  }
                />
              }
              label={<Trans>Enable Data Layer</Trans>}
            />
            {enableDataLayerService && (
              <FormControlLabel
                control={
                  <Switch
                    checked={enableFilePropagationServer}
                    onChange={() =>
                      setEnableFilePropagationServer(
                        !enableFilePropagationServer,
                      )
                    }
                  />
                }
                label={<Trans>Enable File Propagation Server</Trans>}
              />
            )}
          </FormGroup>
        </Flex>
      </Grid>
    </Grid>
  );
}
