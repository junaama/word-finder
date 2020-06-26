import React from 'react';
import { Table } from 'reactstrap';

const Leaderboard = () => {
    return (
        <Table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th>Fastest Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Naama</td>
            <td>25 PTS</td>
            <td>50s</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Nana</td>
            <td>19 PTS</td>
            <td>45s</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Nam</td>
            <td>12 PTS</td>
            <td>60s</td>
          </tr>
        </tbody>
      </Table>
    )
}
export default Leaderboard;