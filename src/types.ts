export type foxData = {
    image: string;
    link: string;
};

export type CatData = {
    file: string;
};

export type DogData = {
    message: string;
    status: string;
};

export type appleData = {
    [K: string]: {
        images: string[] | undefined;
        models: string[] | undefined;
        products: string[] | undefined;
    }
};

export type jokeData = {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
};

export type dadJokeData = {
    attachments: {
        fallback: string;
        image_url: string;
        text: string;
    }[];
    response_type: string;
    username: string;
};

export type memeGeneratorData = {
    success: boolean;
    data: {
        memes: {
            id: string;
            name: string;
            url: string;
            width: number;
            height: number;
            box_count: number;
        }[];
    }
};

export type meowFactsData = {
    data: {
        id: string;
        text: string;
    }[];
};

export type pokemonData = {
    abilities: {
        ability: {
            name: string;
            url: string;
        }[];
        is_hidden: boolean;
        slot: number;
    }[];

    base_experience: number;
    forms: {
        name: string;
        url: string;
    }[];
    game_indices: {
        game_index: number;
        version: {
            name: string;
            url: string;
        }
    }[];
    height: number;
    held_items: {
        item: {
            name: string;
            url: string;
        }
    }[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: {
        move: {
            name: string;
            url: string;
        }
    }[];
    name: string;
    order: number;
    paste_types: any[];
    species: {
        name: string;
        url: string;
    }
    sprites: {
        back_default: string;
        back_female: string;
        back_shiny: string;
        back_shiny_female: string;
        front_default: string;
        front_female: string;
        front_shiny: string;
        front_shiny_female: string;
        other: {};
        versions: {};
    };
    stats: {
        base_stat: number
        effort: number;
        stat: {
            name: string;
            url: string;
        }[];
        types: {
            slot: number;
            type: {
                name: string;
                url: string;
            }
        }[];
    };
    weight: number;
};

export type quoteData = {
    quoteText: string;
    quoteAuthor: string;
    senderName: string;
    senderLink: string;
    quoteLink: string;
};

export type spaceXLaunchData = {
    fairings: {
        reused: boolean;
        recovery_attempt: boolean;
        recovered: boolean;
        ship: [];
    };
    links: {
        patch: {
            small: string;
            large: string;
        };
        reddit: {
            campaign: string;
            launch: string;
            media: string;
            recovery: string;
        };
        flickr: {
            small: [];
            original: [];
        };
        webcast: string;
        youtube_id: string;
        article: string;
        wikipedia: string;
    };
    static_fire_date_utc: string | null;
    static_fire_date_unix: number | null;
    net: boolean;
    rocket: string;
    success: boolean;
    failures: [];
    crew: [];
    ships: [];
    capsules: [];
    payloads: string[];
    launchpad: string;
    flight_number: number;
    name: string;
    date_utc: string;
    date_unix: number;
    date_local: string;
    date_precision: string;
    upcoming: boolean;
    cores: {
        core: string;
        flight: number;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        landing_attempt: boolean;
        landing_success: boolean;
        landing_type: string;
        launchpad: string;
    }[];
    auto_update: boolean;
    tdb: boolean;
    launch_library_id: number;
    id: string;
};