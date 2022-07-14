import React from 'react';
import { Row, Tabs, Tab } from 'react-bootstrap';
import RoomRecordings from '../recordings/RoomRecordings';
import Presentation from './Presentation';
import SharedAccess from '../shared_accesses/SharedAccess';
import RoomSettings from '../room_settings/RoomSettings';
import useSiteSetting from '../../hooks/queries/site_settings/useSiteSetting';

export default function FeatureTabs() {
  const { data: shareRoomEnabled } = useSiteSetting('ShareRooms');
  const { data: preuploadEnabled } = useSiteSetting('PreuploadPresentation');

  return (
    <Row className="pt-5 mx-0">
      <Tabs defaultActiveKey="recordings" unmountOnExit>
        <Tab eventKey="recordings" title="Recordings">
          <RoomRecordings />
        </Tab>
        { preuploadEnabled
          && (
          <Tab eventKey="presentation" title="Presentation">
            <Presentation />
          </Tab>
          )}
        { shareRoomEnabled
          && (
          <Tab eventKey="access" title="Access">
            <SharedAccess />
          </Tab>
          )}
        <Tab eventKey="settings" title="Settings">
          <RoomSettings />
        </Tab>
      </Tabs>
    </Row>
  );
}
