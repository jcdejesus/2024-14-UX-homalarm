import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  IconButton,
  Box,
  Tooltip,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { CardChip, Texture } from '../../../components/CardChip/CardChip';
import { GreenSwitch } from '../../../components/GreenSwitch/GreenSwitch';
import { theme } from '../../../styles/Theme';

interface Alarm {
  id: number;
  title: string;
  description: string;
  chips: { text: string; texture?: Texture }[];
  isShared: boolean;
}

interface AlarmCardProps {
  alarm: Alarm;
}

export const AlarmCard: React.FC<AlarmCardProps> = ({ alarm }) => {
  return (
    <Card
      sx={{
        margin: theme.spacing(10),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        borderRadius: theme.shape.borderRadius, // Añadir esquinas redondeadas
      }}
    >
      <CardHeader action={<GreenSwitch />} />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            marginLeft: theme.spacing(2),
            gap: theme.spacing(3),
            position: 'relative',
          }}
        >
          <>
            <Typography variant="h2" sx={{ alignSelf: 'flex-end' }}>
              {alarm.title}
            </Typography>
            <Typography variant="h5" sx={{ alignSelf: 'flex-end' }}>
              {alarm.description}
            </Typography>
          </>
          <Tooltip
            title="Comparte esta alarma con tus contactos, envia un link."
            placement="top"
            slotProps={{
              popper: {
                modifiers: [
                  {
                    name: 'offset',
                    options: {
                      offset: [100, 0],
                    },
                  },
                ],
              },
            }}
          >
            <IconButton
              aria-label="share"
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: theme.palette.secondary.contrastText,
              }}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        {alarm.chips.map((chip, index) => (
          <CardChip
            key={`${index}-${chip.text}`}
            text={chip.text}
            texture={chip.texture}
          />
        ))}
      </CardActions>
    </Card>
  );
};
