/// <reference path="../../typings/browser.d.ts"/>

import $ from "jquery";

export function getServiceUri() {
    var url = "http://api.soundcloud.com/users/67393202/tracks.json?client_id=0be8085a39603d77fbf672a62a7929ea";
    return url;
}

export class User {
    id: number;
    kind: string;
    permalink: string;
    username: string;
    last_modified: Date;
    uri: string;
    permalink_url: string;
    avatar_url: string;
}

export class Track {
    kind: string;
    id: number;
    created_at: Date;
    user_id: number;
    duration: number;
    commentable: boolean;
    state: string;
    original_content_size: number;
    last_modified: Date;
    sharing: string;
    tag_list: string;
    permalink: string;
    streamable: boolean;
    embeddable_by: string;
    download_able: boolean;
    purchase_url: boolean;
    label_id: number;
    label_title: string;
    genre: string;
    title: string;
    description: string;
    label_name: string;
    release: Date
    track_type: string;
    key_signature: string;
    isrc: string;
    videl_url: string;
    release_year: number;
    release_mont: number;
    release_day: number;
    original_format: string;
    license: string;
    url: string;
    user: User;
    permalink_url: string;
    artwork_url: string;
    waveform_url: string;
    stream_url: string;
    playback_count: number;
    download_count: number;
    favoritings_count: number;
    comment_count: number;
    attachment_uri: string;
}